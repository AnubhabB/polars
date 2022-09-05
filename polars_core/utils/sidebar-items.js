window.SIDEBAR_ITEMS = {"fn":[["accumulate_dataframes_horizontal",""],["accumulate_dataframes_vertical","This takes ownership of the DataFrame so that drop is called earlier."],["accumulate_dataframes_vertical_unchecked","This takes ownership of the DataFrame so that drop is called earlier. Does not check if schema is correct"],["argsort_no_nulls",""],["coalesce_nulls","ensure that nulls are propagated to both arrays"],["coalesce_nulls_series",""],["combine_validities",""],["concat_df","Concat the DataFrames to a single DataFrame."],["concat_df_unchecked","Concat the DataFrames to a single DataFrame."],["get_supertype","Given two datatypes, determine the supertype that both types can safely be cast to"],["get_time_units",""],["parallel_op_series","Simple wrapper to parallelize functions that can be divided over threads aggregated and finally aggregated in the main thread. This can be done for sum, min, max, etc."],["slice_slice",""],["split_ca",""],["try_get_supertype","Given two datatypes, determine the supertype that both types can safely be cast to"],["with_unstable_series","A utility that allocates an `UnstableSeries`. The applied function can then use that series container to save heap allocations and swap arrow arrays."]],"struct":[["NoNull","Just a wrapper structure. Useful for certain impl specializations This is for instance use to implement `impl<T> FromIterator<T::Native> for NoNull<ChunkedArray<T>>` as `Option<T::Native>` was already implemented: `impl<T> FromIterator<Option<T::Native>> for ChunkedArray<T>`"],["TrustMyLength",""],["Wrap",""]],"trait":[["Arg",""],["CustomIterTools",""],["CustomIterToolsSized",""],["FromTrustedLenIterator",""],["IntoVec",""]]};