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
          {title: 'Not-So-Easy', value: 'not-so-easy'},
          {title: 'Complex', value: 'complex'},
          {title: 'Hard', value: 'hard'},
          {title: 'Extreme', value: 'extreme'},
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
      of: [
        {type: 'block'},
        {
          type: 'image',
        },
      ],
    },
    {
      name: 'prints',
      title: 'Prints',
      type: 'number',
    },
  ],
  initialValue: {
    prints: 0,
  },
}
