import { createSlice, createSelector, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData, exerciseOptions } from "../../utils/fetchData";

const startState = {
   exercisesItems: null,
   isLoading: false,
   error: null
};

export const getExercises = createAsyncThunk(
   'exercises/getExercises',
   async (_, { dispatch }) => {
      const res = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      dispatch(setExercises(res))
   }
);

export const getExercisesBySelectedMuscleGroup = createAsyncThunk(
   'exercises/getExercisesBySelectedMuscleGroup',
   async (muscleGroup, { dispatch }) => {
      const res = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${muscleGroup}`, exerciseOptions);
      dispatch(setExercises(res))
   }
);

export const exercisesSlice = createSlice({
   name: 'exercises',
   initialState: startState,
   reducers: {
      setExercises: (state, { payload }) => {
         state.exercisesItems = payload;
         state.error = null
      },
      setIsLoading: (state, { payload }) => {
         state.isLoading = payload;
      },
      setError: (state, { payload }) => {
         state.error = payload;
         state.exercises = null;
      }
   }
});


export const exercisesReducer = exercisesSlice.reducer;

export const { setExercises, setIsLoading, setError } = exercisesSlice.actions;

export const selectExercises = ({ exercises }) => exercises;

export const selectExercisesItems = createSelector(
   selectExercises,
   ({ exercisesItems }) => exercisesItems
);

export const selectIsLoading = createSelector(
   selectExercises,
   ({ isLoading }) => isLoading
);

export const selectError = createSelector(
   selectExercises,
   ({ error }) => error
);


// const startState = {
//    goods: null,
//    isLoading: false,
//    error: null
// };

// export const productsSlice = createSlice({
//    name: 'products',
//    initialState: startState,
//    reducers: {
//        setProducts: (state, {payload}) => {
//            state.goods = payload;
//            state.error = null
//        },
//        setIsLoading: (state, {payload}) => {
//            state.isLoading = payload;
//        },
//        setError : (state,{payload}) => {
//            state.error = payload;
//            state.products = null;
//        }
//    }
// });



// export const productsReducer = productsSlice.reducer;

// export const {setProducts, setIsLoading, setError} = productsSlice.actions;

// export const selectProducts = ({products}) => products;

// export const selectGoods = createSelector(
//    selectProducts,
//    ({goods}) => goods
// );

// export const selectIsLoading = createSelector(
//    selectProducts,
//    ({isLoading}) => isLoading
// );

// export const selectError = createSelector (
//    selectProducts,
//    ({error}) => error
// )







// export const getProducts = createAsyncThunk(
//    'products/fetchProducts',
//    (_, {dispatch}) => {
//
//        setIsLoading(true);
//        .then(({products}) => {
//           setProducts(products);
//            setIsLoading(false);
//        })
//        .catch ((err)=>{
//            setError(err);
//        })
//        .finally(() => {
//            setIsLoading(false);
//        })

//    }
// );