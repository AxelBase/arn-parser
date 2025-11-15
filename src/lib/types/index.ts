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