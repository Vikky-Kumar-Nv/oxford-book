import { NextRequest, NextResponse } from 'next/server';
import { sampleReviews } from '@/lib/sampleData';

export const dynamic = 'force-static';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const bookId = searchParams.get('bookId');

  let reviews = [...sampleReviews];

  if (bookId) {
    reviews = reviews.filter(review => review.bookId === bookId);
  }

  return NextResponse.json(reviews);
}

export async function POST(request: NextRequest) {
  try {
    const reviewData = await request.json();
    
    // In a real app, you would save to database
    const newReview = {
      id: Date.now().toString(),
      ...reviewData,
      date: new Date().toISOString().split('T')[0]
    };
    
    return NextResponse.json({ 
      success: true, 
      message: 'Review submitted successfully',
      review: newReview
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to submit review' },
      { status: 500 }
    );
  }
}