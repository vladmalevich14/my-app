export enum ArticleBlockType {
  'CODE' = 'CODE',
  'IMAGE' = 'IMAGE',
  'TEXT' = 'TEXT',
}

export interface ArticleBLockBase {
  id: string;
  type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBLockBase {
  type: ArticleBlockType.CODE;
  code: string;
}

export interface ArticleImageBlock extends ArticleBLockBase {
  type: ArticleBlockType.IMAGE;
  src: string;
  title: string;
}

export interface ArticleTextBlock extends ArticleBLockBase {
  type: ArticleBlockType.TEXT;
  title?: string;
  paragraphs: string[];
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock;

export enum ArticleType {
  'IT' = 'IT',
  'SCIENCE' = 'SCIENCE',
  'ECONOMICS' = 'ECONOMICS',
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;

  type: ArticleType[];
  blocks: ArticleBlock[];
}
