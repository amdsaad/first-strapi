import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'rich-text';
  };
  attributes: {
    rich_text: Attribute.RichText & Attribute.Required;
  };
}

export interface SharedNav extends Schema.Component {
  collectionName: 'components_shared_navs';
  info: {
    displayName: 'nav';
    icon: 'database';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

export interface SharedImage extends Schema.Component {
  collectionName: 'components_shared_images';
  info: {
    displayName: 'image';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.rich-text': SharedRichText;
      'shared.nav': SharedNav;
      'shared.image': SharedImage;
    }
  }
}
