export enum ArticleBlockType {
    CODE = 'CODE',
    IMAGE = 'IMAGE',
    TEXT = 'TEXT',
}

export interface ArticleBlockBase {
    id: string,
    type: ArticleBlockType
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE
    src: string,
    title: string
}

export interface ArticleTextBlock extends ArticleBlockBase {
    type: ArticleBlockType.TEXT,
    title?: string,
    paragraphs: string[]
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: ArticleBlockType.CODE
    code: string
}

export type ArticleBlock = ArticleCodeBlock | ArticleTextBlock | ArticleImageBlock

export enum ArticleType {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS'
}

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[];
    blocks: ArticleBlock[]
}
