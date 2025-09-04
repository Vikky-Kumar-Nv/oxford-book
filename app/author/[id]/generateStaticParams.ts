import { sampleAuthors } from '@/lib/sampleData';

export async function generateStaticParams() {
  return sampleAuthors.map((author) => ({
    id: author.id,
  }));
}
