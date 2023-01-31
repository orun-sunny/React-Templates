import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";

const adminToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvc2Uuc2Vsb3BpYW4udXNcL2FwaVwvYWRtaW5cL2xvZ2luIiwiaWF0IjoxNjc1MTYxNTgwLCJleHAiOjE2NzUxNjUxODAsIm5iZiI6MTY3NTE2MTU4MCwianRpIjoiOXlsemZVb2tlYVJhcXpTcCIsInN1YiI6MSwicHJ2IjoiZGY4ODNkYjk3YmQwNWVmOGZmODUwODJkNjg2YzQ1ZTgzMmU1OTNhOSJ9.xPYKbVWUBbq9G07FjGiBJsy6jC5QCLb7LUdjHwx9s18";

const Brand = () => {
    const [brands, setBrands] = useState([])
    const [categories, setCategories] = useState([])
    const [subCategories, setSubcategories] = useState([])
    const [img, setImgUpload] = useState();
    // useEffect(() => {
    //     fetch('https://se.selopian.us/api/admin/brand-store')
    //         .then(res => res.json())
    //         .then(data => setBrands(data));
    // }, [])

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data)
        // const formData =new FormData();
        // formData.append("image",data.image[0]);
        // formData.append("name",data.name);
        // for(let pair of formData.entries()){
        //     console.log(pair[0]," ",pair[1])
        // }
        // const res = await fetch('https://se.selopian.us/api/admin/brand-store', {
        //     method: 'POST',
        //     body: formData,
        //     headers: {
        //         // 'content-type': 'application/json',
        //         'Authorization':`bearer ${adminToken}`
        //     }
        // })
        // console.log(res)
        // // const newData = await res.json()
        // // console.log(newData)
    };

    const getCategories = async () => {
        const res = await fetch("https://se.selopian.us/api/admin/category-list", {
            method: "GET",
            headers: {
                'Authorization': `bearer ${adminToken}`
            }
        })
        if (res.status === 200) {
            const data = await res.json()
            setCategories(data.categories)
        }
    }

    const getSubcategories = async () => {
        const res = await fetch("https://se.selopian.us//api/admin/sub-category-list", {
            method: "GET",
            headers: {
                'Authorization': `bearer ${adminToken}`
            }
        })
        if (res.status === 200) {
            const data = await res.json()
            setSubcategories(data.subCategories)
        }
    }

    console.log(categories)
    console.log(subCategories)

    useEffect(() => {
        getCategories()
    }, [])

    useEffect(() => {
        getSubcategories()
    }, [])


    return (
        <div>
            <h1>Brand: {brands.length}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} type="text" placeholder='Name' required/>
                <input {...register("image")} type="file" placeholder='image' accept="image/*" required/>
                <input type="submit" value="Add Brand"/>
                <select {...register("category_id")} defaultValue={0}>
                    {
                        categories.map(item => <option key={item.id} value={item.id}>{item.name}</option>)
                    }

                </select>

                <select {...register("sub_category_id")} defaultValue={0}>
                    {
                        categories.map(item => <option key={item.id} value={item.id}>{item.name}</option>)
                    }

                </select>
            </form>

            {/*<ul>*/}
            {/*    {*/}
            {/*        brands?.map(brand => <li key={brand.id}>id: {brand.id} name: {brand.name} image: {brand.image}</li>)*/}
            {/*    }*/}
            {/*</ul>*/}
        </div>
    );
};

export default Brand;