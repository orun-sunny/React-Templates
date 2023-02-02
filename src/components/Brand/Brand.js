import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";

const adminToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvc2Uuc2Vsb3BpYW4udXNcL2FwaVwvYWRtaW5cL3JlZnJlc2giLCJpYXQiOjE2NzUyMjc0OTUsImV4cCI6MTY3NTIzNjA1MywibmJmIjoxNjc1MjMyNDUzLCJqdGkiOiIyeGV4Y2w0YlpjeHEwd2RQIiwic3ViIjoxLCJwcnYiOiJkZjg4M2RiOTdiZDA1ZWY4ZmY4NTA4MmQ2ODZjNDVlODMyZTU5M2E5In0._L7qLB76Q3n4UpJkOS-_S9dcKdMB7tVjNm7WnXErlgc";

const Brand = () => {
    const [brands, setBrands] = useState([])
    const [categories, setCategories] = useState([])
    const [catId,setCatId] = useState(null)
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
        const formData =new FormData();
        formData.append("image",data.image[0]);
        formData.append("name",data.name);
        formData.append("sub_category_id",data.sub_category_id);
        formData.append("category_id",catId);
        const res = await fetch('https://se.selopian.us/api/admin/brand-store', {
            method: 'POST',
            body: formData,
            headers: {
                'Authorization':`bearer ${adminToken}`
            }
        })
        const newData = await res.json()
        console.log(newData)
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
        const res = await fetch("https://se.selopian.us/api/admin/sub-category-list", {
            method: "GET",
            headers: {
                'Authorization': `bearer ${adminToken}`
            }
        })
        if (res.status === 200) {
            const data = await res.json()
            // console.log(data)
            setSubcategories(data.subCategories)
        }
    }

    // console.log(categories)

    useEffect(() => {
        getCategories()
        getSubcategories()
    }, [])

const selectedSubCats = subCategories.filter(subs => +(subs.category_id) === +catId)

    return (
        <div className="padding-left:16px">
            <h1>Brand: {brands.length}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/*<select {...register("category_id")} defaultValue={0}>*/}
                <select onClick={(e)=>setCatId(e.target.value)} defaultValue={0}>
                    {
                        categories.map(item => <option key={item.id} value={item.id}>{item.name}</option>)
                    }
                </select><br/>
                <select {...register("sub_category_id")} defaultValue={0}>
                    {
                        selectedSubCats.map(item => <option key={item.id} value={item.id}>{item.name} </option>)
                    }
                </select><br/>
                <input {...register("name")} type="text" placeholder='Name' required/><br/>
                <input {...register("image")} type="file" placeholder='image' accept="image/*" required/><br/>
                <input type="submit" value="Add Brand"/><br/>
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