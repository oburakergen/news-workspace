export interface IFeeds {
  readonly title: string;
  readonly photo: string;
  readonly photos: [string | null];
  readonly description: string;
  readonly tags: string[];
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
}
