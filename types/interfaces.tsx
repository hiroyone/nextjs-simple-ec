export interface articleMetaData {
  id: string;
  date: string;
  title: string;
}

export interface itemMetaData {
  id: string;
  date: string;
  name: string;
  price: number;
  category: string;
}

export interface articleData extends articleMetaData {
  contentHtml: string;
}

export interface itemData extends itemMetaData {
  contentHtml: string;
}
