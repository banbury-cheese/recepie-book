export default {
  name: 'recepie',
  title: 'Recepie',
  type: 'document',
  fields: [
    {
      name: 'name',
      Title: 'Recipe Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 200,
      },
    },
    {
      title: 'Duration',
      name: 'duration',
      type: 'string',
    },
    {
      name: 'difficulty',
      title: 'Difficulty',
      type: 'string',
      options: {
        list: [
          {title: 'Easy', value: 'easy'},
          {title: 'Medium', value: 'medium'},
          {title: 'Hard', value: 'hard'},
        ],
      },
    },
    {
      name: 'chef',
      title: 'Chef',
      type: 'string',
    },
    {
      name: 'mainImage',
      title: 'Recipe Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'prints',
      title: 'Prints',
      type: 'number',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
        },
      ],
      options: {
        layout: 'grid',
      },
    },
  ],
  initialValue: {
    prints: 0,
  },
}
