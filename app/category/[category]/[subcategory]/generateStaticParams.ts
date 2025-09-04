export async function generateStaticParams() {
  return [
    { category: 'fiction', subcategory: 'mystery-thriller' },
    { category: 'fiction', subcategory: 'romance' },
    { category: 'fiction', subcategory: 'science-fiction' },
    { category: 'fiction', subcategory: 'fantasy' },
    { category: 'fiction', subcategory: 'historical-fiction' },
    { category: 'fiction', subcategory: 'literary-fiction' },
    { category: 'non-fiction', subcategory: 'biography-memoir' },
    { category: 'non-fiction', subcategory: 'business' },
    { category: 'non-fiction', subcategory: 'self-help' },
    { category: 'children', subcategory: 'picture-books' },
    { category: 'children', subcategory: 'early-readers' },
  ];
}
