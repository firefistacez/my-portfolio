export default {
    name: "youtube",
    title: "YouTube",
    type: "document",
    fields: [
        {
            name:"title",
            type:"string",
        },
        {
            name:"date",
            type:"datetime",
        },
        {
            name:"source",
            type:"string",
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
              hotspot: true,
            },
          },
        {
            name:"description",
            type:"text",
        },
        {
            name:"link",
            type:"url",
        },
        {
            name:"tags",
            type:"array",
            of: [
                {
                    type:"string",
                }
            ],
            options: {
                layout: "tags",
            },
        }
    ],
};