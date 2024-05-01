import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllProduct, fetchAllProductFilter, fetchAllCategories, fetchAllBrands, fetchAllProductByID } from '../productlist/ProductListAPI'

const initialState = {
    value: 0,
    status: 'idle',
    products: [],
    brands: [],
    categories: [],
    totalItems: 0,
    selectedProduct: null
}

export const fetchAllProductAsync = createAsyncThunk(
    'product/fetchAllProduct',
    async () => {
        const response = await fetchAllProduct();
        console.log(response)
        return response.data
        console.log(response)
    }
)


export const fetchAllProductByIDAsync = createAsyncThunk(
    'product/fetchAllProductByID',
    async (id) => {
        const response = await fetchAllProductByID(id);
        console.log(response)
        return response.data
        console.log(response)
    }
)

export const fetchAllProductFilterAsync = createAsyncThunk(
    'product/fetchAllProductFilter',
    async ({ filter, sort, pagination }) => {
        const response = await fetchAllProductFilter(filter, sort, pagination);
        console.log(response)
        return response.data

    }
)

export const fetchAllBrandsFilterAsync = createAsyncThunk(
    'product/fetchAllBrandsFilter',
    async () => {
        const response = await fetchAllBrands();
        console.log(response)
        return response.data

    }
)

export const fetchAllCategoriesFilterAsync = createAsyncThunk(
    'product/fetchAllCategoriesFilter',
    async () => {
        const response = await fetchAllCategories();
        console.log(response)
        return response.data

    }
)


export const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllProductAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchAllProductAsync.fulfilled, (state, action) => {
                console.log("fulfilled")
                state.status = 'idle';
                state.products = action.payload.products;
                console.log(state.products)
            })
            .addCase(fetchAllProductAsync.rejected, (state, action) => {
                state.status = 'loading'
                state.error = action.message;
            })
            .addCase(fetchAllProductFilterAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchAllProductFilterAsync.fulfilled, (state, action) => {
                console.log("fulfilled filter")
                state.status = 'idle';
                state.products = action.payload.products;
                state.totalItems = action.payload.totalItems;
            })
            .addCase(fetchAllProductFilterAsync.rejected, (state, action) => {
                state.status = 'loading'
                state.error = action.message;
            })
            .addCase(fetchAllBrandsFilterAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchAllBrandsFilterAsync.fulfilled, (state, action) => {
                console.log("fulfilled")
                state.status = 'idle';
                state.brands = action.payload;
                console.log(state.brands)
            })
            .addCase(fetchAllCategoriesFilterAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchAllCategoriesFilterAsync.fulfilled, (state, action) => {
                console.log("fulfilled")
                state.status = 'idle';
                state.categories = action.payload;
                console.log(state.categories)
            })
            .addCase(fetchAllProductByIDAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchAllProductByIDAsync.fulfilled, (state, action) => {
                console.log("fulfilled")
                state.status = 'idle';
                state.selectedProduct = action.payload;
                console.log(state.selectedProduct)
            })
    }
})




export const selectAllProducts = (state) => state.product.products;
export const selectBrands = (state) => state.product.brands;
export const selectCategories = (state) => state.product.categories;
 export const selectProductById = (state) => state.product.selectedProduct;
// export const selectProductListStatus = (state) => state.product.status;
export const selectTotalItems = (state) => state.product.totalItems;

export default ProductSlice.reducer;