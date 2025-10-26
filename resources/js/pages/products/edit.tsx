import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { FormEvent } from 'react';
import { route } from 'ziggy-js';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Edit Product',
        href: '/products/edit',
    },
];

interface Product {
    id: number;
    name: string;
    category: string;
    description: string;
    price: number | string;
}

interface Props {
    product: Product;
}

export default function Create({ product }: Props) {
    const { data, setData, put, processing, errors } = useForm({
        name: product.name,
        category: product.category,
        description: product.description,
        price: product.price,
    });

    function handleUpdate(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        put(route('products.update', product.id));
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Product" />
            <div className="w-8/12 p-4">
                <form onSubmit={handleUpdate} className="space-y-4">
                    <div className="flex flex-col gap-1.5">
                        <Label>Name:</Label>
                        <Input
                            type="text"
                            placeholder="Enter name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <Label>Category:</Label>
                        <Input
                            type="text"
                            placeholder="Enter category"
                            value={data.category}
                            onChange={(e) =>
                                setData('category', e.target.value)
                            }
                        />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <Label>Description:</Label>
                        <Input
                            type="text"
                            placeholder="Enter description"
                            value={data.description}
                            onChange={(e) =>
                                setData('description', e.target.value)
                            }
                        />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <Label>Price:</Label>
                        <Input
                            type="number"
                            placeholder="Enter price"
                            value={data.price}
                            onChange={(e) =>
                                setData('price', e.target.value)
                            }
                        />
                    </div>
                    <div>
                        <Button
                            type="submit"
                            disabled={processing}
                            className="cursor-pointer"
                        >
                            {processing ? 'Saving...' : 'Save'}
                        </Button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
