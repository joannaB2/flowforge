import { mockForms } from '@/mocks/forms';
import { FormList } from './_components/FormList';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

export default async function FormsPage() {
  return (
    <div className="w-full">
      <div className="flex w-full justify-between">
        <h1 className="mb-12 text-xl text-gray-500">My forms</h1>
        <Link
          href={'/forms/new'}
          className={buttonVariants({ variant: 'secondary', size: 'lg' })}
        >
          Add new form
        </Link>
      </div>
      <FormList formList={mockForms} />
    </div>
  );
}
