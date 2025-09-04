export async function generateStaticParams() {
  return [
    { ageGroup: 'toddlers' },
    { ageGroup: 'children' },
    { ageGroup: 'tweens' },
    { ageGroup: 'adults' }
  ];
}
