export interface ParsedArn {
  partition: string;
  service: string;
  region: string | null;
  accountId: string | null;
  resourceType: string | null;
  resourceId: string | null;
  fullResource: string;
  original: string;
}

export function parseArn(input: string): { parsed: ParsedArn | null; error: string | null } {
  const trimmed = input.trim();
  if (!trimmed.startsWith('arn:')) {
    return { parsed: null, error: 'ARN must start with "arn:"' };
  }

  const parts = trimmed.split(':');
  if (parts.length < 6) {
    return { parsed: null, error: 'ARN must have at least 6 colon-separated parts' };
  }

  const partition = parts[1];
  const validPartitions = ['aws', 'aws-cn', 'aws-us-gov', 'aws-iso', 'aws-iso-b'];
  if (!validPartitions.includes(partition)) {
    return { parsed: null, error: 'Invalid partition (e.g., aws, aws-cn)' };
  }

  const service = parts[2];
  if (!service) {
    return { parsed: null, error: 'Service cannot be empty' };
  }

  let region = parts[3] || null;
  let accountId = parts[4] || null;
  let fullResource = parts.slice(5).join(':');

  if (!fullResource) {
    return { parsed: null, error: 'Resource cannot be empty' };
  }

  let resourceType: string | null = null;
  let resourceId: string | null = null;

  // Handle resource variations
  const resourceParts = fullResource.split(/[:\/]/);
  if (resourceParts.length > 1) {
    resourceType = resourceParts[0];
    resourceId = resourceParts.slice(1).join('/');
  } else {
    resourceType = null;
    resourceId = fullResource;
  }

  // Special cases, e.g., S3 arn:aws:s3:::bucket
  if (service === 's3' && region === '' && accountId === '') {
    region = null;
    accountId = null;
    fullResource = parts.slice(3).join(':').replace(/^::/, '');
    resourceType = 'bucket';
    resourceId = fullResource;
  }

  const parsed: ParsedArn = {
    partition,
    service,
    region,
    accountId,
    resourceType,
    resourceId,
    fullResource,
    original: trimmed
  };

  return { parsed, error: null };
}