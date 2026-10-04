import { mockForms } from '@/mocks/forms';

import { FormList } from './_components/FormList';

export default async function FormsPage() {
  return (
    <div>
      <h1 className="mb-12 text-xl text-gray-500">My forms</h1>
      <FormList formList={mockForms} />
    </div>
  );
}
