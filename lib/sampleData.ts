export interface Book {
  id: string;
  title: string;
  isbn: string;
  author: string;
  publisher: string;
  binding: 'Paperback' | 'Hardcover';
  weight: string;
  language: string;
  description: string;
  mrp: number;
  discountedPrice: number;
  rating: number;
  reviewCount: number;
  category: string;
  subcategory?: string;
  ageGroup?: string;
  coverImage: string;
  inStock: boolean;
  featured: boolean;
}

export interface Author {
  id: string;
  name: string;
  bio: string;
  image: string;
  bookCount: number;
}

export interface Review {
  id: string;
  bookId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export const sampleBooks: Book[] = [
  {
    id: '1',
    title: 'The Midnight Library',
    isbn: '978-0525559474',
    author: 'Matt Haig',
    publisher: 'Viking',
    binding: 'Paperback',
    weight: '280g',
    language: 'English',
    description: 'Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.',
    mrp: 899,
    discountedPrice: 629,
    rating: 4.5,
    reviewCount: 1243,
    category: 'fiction',
    subcategory: 'literary-fiction',
    ageGroup: 'adult',
    coverImage: 'https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&w=400',
    inStock: true,
    featured: true
  },
  {
    id: '2',
    title: 'Atomic Habits',
    isbn: '978-0735211292',
    author: 'James Clear',
    publisher: 'Avery',
    binding: 'Hardcover',
    weight: '340g',
    language: 'English',
    description: 'An Easy & Proven Way to Build Good Habits & Break Bad Ones. Tiny Changes, Remarkable Results.',
    mrp: 1299,
    discountedPrice: 779,
    rating: 4.7,
    reviewCount: 2156,
    category: 'non-fiction',
    subcategory: 'self-help',
    ageGroup: 'adult',
    coverImage: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=400',
    inStock: true,
    featured: true
  },
  {
    id: '3',
    title: 'The Seven Moons of Maali Almeida',
    isbn: '978-1529077926',
    author: 'Shehan Karunatilaka',
    publisher: 'Sort Of Books',
    binding: 'Paperback',
    weight: '320g',
    language: 'English',
    description: 'Winner of the Booker Prize 2022. A darkly funny and deeply moving novel about ghosts, grief, and the afterlife.',
    mrp: 999,
    discountedPrice: 699,
    rating: 4.3,
    reviewCount: 567,
    category: 'fiction',
    subcategory: 'literary-fiction',
    ageGroup: 'adult',
    coverImage: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400',
    inStock: true,
    featured: false
  },
  {
    id: '4',
    title: 'Harry Potter and the Philosopher\'s Stone',
    isbn: '978-0747532699',
    author: 'J.K. Rowling',
    publisher: 'Bloomsbury',
    binding: 'Paperback',
    weight: '250g',
    language: 'English',
    description: 'The first book in the magical Harry Potter series. Follow Harry as he discovers he is a wizard.',
    mrp: 799,
    discountedPrice: 559,
    rating: 4.8,
    reviewCount: 3421,
    category: 'children',
    subcategory: 'middle-grade',
    ageGroup: 'children',
    coverImage: 'https://images.pexels.com/photos/159866/books-book-pages-read-159866.jpeg?auto=compress&cs=tinysrgb&w=400',
    inStock: true,
    featured: true
  },
  {
    id: '5',
    title: 'Sapiens: A Brief History of Humankind',
    isbn: '978-0062316110',
    author: 'Yuval Noah Harari',
    publisher: 'Harper',
    binding: 'Paperback',
    weight: '380g',
    language: 'English',
    description: 'A fascinating exploration of how Homo sapiens came to dominate Earth and what our future may hold.',
    mrp: 1199,
    discountedPrice: 839,
    rating: 4.6,
    reviewCount: 1876,
    category: 'non-fiction',
    subcategory: 'history',
    ageGroup: 'adult',
    coverImage: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400',
    inStock: true,
    featured: true
  },
  {
    id: '6',
    title: 'The Silent Patient',
    isbn: '978-1250301697',
    author: 'Alex Michaelides',
    publisher: 'Celadon Books',
    binding: 'Paperback',
    weight: '290g',
    language: 'English',
    description: 'A psychological thriller about a woman who refuses to speak after allegedly murdering her husband.',
    mrp: 899,
    discountedPrice: 629,
    rating: 4.4,
    reviewCount: 987,
    category: 'fiction',
    subcategory: 'thriller',
    ageGroup: 'adult',
    coverImage: 'https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&w=400',
    inStock: true,
    featured: false
  },
  {
    id: '7',
    title: 'The Prophet',
    isbn: '978-0394404288',
    author: 'Kahlil Gibran',
    publisher: 'Knopf',
    binding: 'Hardcover',
    weight: '200g',
    language: 'English',
    description: 'A timeless spiritual classic filled with wisdom about love, work, friendship, and the human condition.',
    mrp: 599,
    discountedPrice: 419,
    rating: 4.7,
    reviewCount: 1543,
    category: 'spiritual',
    ageGroup: 'adult',
    coverImage: 'https://images.pexels.com/photos/159866/books-book-pages-read-159866.jpeg?auto=compress&cs=tinysrgb&w=400',
    inStock: true,
    featured: true
  },
  {
    id: '8',
    title: 'The Art of War',
    isbn: '978-1590302255',
    author: 'Sun Tzu',
    publisher: 'Shambhala',
    binding: 'Paperback',
    weight: '150g',
    language: 'English',
    description: 'Ancient Chinese military treatise that has become essential reading for business and life strategy.',
    mrp: 499,
    discountedPrice: 349,
    rating: 4.5,
    reviewCount: 876,
    category: 'philosophy',
    subcategory: 'ancient-philosophy',
    ageGroup: 'adult',
    coverImage: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400',
    inStock: true,
    featured: false
  }
];

export const sampleAuthors: Author[] = [
  {
    id: '1',
    name: 'Matt Haig',
    bio: 'British author known for his novels, children\'s books, and memoir about depression.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
    bookCount: 15
  },
  {
    id: '2',
    name: 'James Clear',
    bio: 'Author and speaker focused on habits, decision making, and continuous improvement.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    bookCount: 3
  },
  {
    id: '3',
    name: 'J.K. Rowling',
    bio: 'British author best known for the Harry Potter series, one of the best-selling book series in history.',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
    bookCount: 12
  },
  {
    id: '4',
    name: 'Yuval Noah Harari',
    bio: 'Israeli historian and philosopher, author of international bestsellers about human history and future.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    bookCount: 4
  }
];

export const sampleReviews: Review[] = [
  {
    id: '1',
    bookId: '1',
    userName: 'Sarah Johnson',
    rating: 5,
    comment: 'Absolutely beautiful and thought-provoking. This book changed my perspective on life choices.',
    date: '2024-12-15'
  },
  {
    id: '2',
    bookId: '1',
    userName: 'Mike Chen',
    rating: 4,
    comment: 'Great concept and well-executed. Some parts were slow but overall very engaging.',
    date: '2024-12-10'
  },
  {
    id: '3',
    bookId: '2',
    userName: 'Emily Davis',
    rating: 5,
    comment: 'Life-changing book! The habit stacking concept is revolutionary.',
    date: '2024-12-12'
  },
  {
    id: '4',
    bookId: '3',
    userName: 'David Wilson',
    rating: 5,
    comment: 'Incredible storytelling and world-building. Could not put it down!',
    date: '2024-12-14'
  },
  {
    id: '5',
    bookId: '4',
    userName: 'Lisa Brown',
    rating: 4,
    comment: 'Fascinating insights into psychology. Makes you think differently about thinking.',
    date: '2024-12-13'
  },
  {
    id: '6',
    bookId: '5',
    userName: 'John Smith',
    rating: 5,
    comment: 'Perfect blend of adventure and heart. My kids love this book!',
    date: '2024-12-11'
  },
  {
    id: '7',
    bookId: '6',
    userName: 'Anna Rodriguez',
    rating: 4,
    comment: 'Beautifully written with stunning illustrations. A timeless classic.',
    date: '2024-12-09'
  },
  {
    id: '8',
    bookId: '7',
    userName: 'Tom Johnson',
    rating: 5,
    comment: 'Brilliant mystery that keeps you guessing until the very end.',
    date: '2024-12-08'
  },
  {
    id: '9',
    bookId: '8',
    userName: 'Maria Garcia',
    rating: 4,
    comment: 'Compelling love story with great character development.',
    date: '2024-12-07'
  },
  {
    id: '10',
    bookId: '9',
    userName: 'Chris Lee',
    rating: 5,
    comment: 'Mind-bending sci-fi that explores deep philosophical questions.',
    date: '2024-12-06'
  },
  {
    id: '11',
    bookId: '10',
    userName: 'Rachel White',
    rating: 4,
    comment: 'Epic fantasy adventure with rich world-building and memorable characters.',
    date: '2024-12-05'
  },
  {
    id: '12',
    bookId: '2',
    userName: 'Mark Thompson',
    rating: 5,
    comment: 'Best productivity book I have ever read. Actually works!',
    date: '2024-12-04'
  },
  {
    id: '13',
    bookId: '3',
    userName: 'Jennifer Adams',
    rating: 4,
    comment: 'Gripping from start to finish. Couldn not sleep until I finished it.',
    date: '2024-12-03'
  },
  {
    id: '14',
    bookId: '1',
    userName: 'Robert Davis',
    rating: 5,
    comment: 'One of the most beautiful books about life and choices I have ever read.',
    date: '2024-12-02'
  }
];