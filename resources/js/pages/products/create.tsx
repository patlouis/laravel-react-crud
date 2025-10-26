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
        title: 'Create Product',
        href: '/products/create',
    },
];

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        category: '',
        description: '',
        price: '',
    });

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post(route('products.store'));
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Product" />
            <div className="w-8/12 p-4">
                <form onSubmit={handleSubmit} className="space-y-4">
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
                            onChange={(e) => setData('category', e.target.value)} 
                        />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <Label>Description:</Label>
                        <Input 
                            type="text" 
                            placeholder="Enter description"
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)} 
                        />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <Label>Price:</Label>
                        <Input 
                            type="number" 
                            placeholder="Enter price"
                            value={data.price} 
                            onChange={(e) => setData('price', e.target.value)} 
                        />
                    </div>
                    <div>
                        <Button 
                            type ="submit" 
                            disabled={processing} 
                            className="cursor-pointer">
                                {processing ? 'Saving...' : 'Save'}
                        </Button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
