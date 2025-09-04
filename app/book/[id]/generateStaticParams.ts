import { sampleBooks } from '@/lib/sampleData';

export async function generateStaticParams() {
  return sampleBooks.map((book) => ({
    id: book.id,
  }));
}
