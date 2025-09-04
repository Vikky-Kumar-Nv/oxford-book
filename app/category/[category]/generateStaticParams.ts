import { sampleBooks } from '@/lib/sampleData';

export async function generateStaticParams() {
  const categories = Array.from(new Set(sampleBooks.map(book => book.category)));
  return categories.map((category) => ({
    category: category,
  }));
}
