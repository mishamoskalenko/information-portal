import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { ArticleDetailsRecommendationsSchema } from '../../types/ArticleDetailsRecommendationsSchema';
import { fetchArticleRecommendations } from '../../services/fetchArticleRecommendations/fetchArticleRecommendations';

export const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
    (state) => state.articlesDetailsPage?.recommendations || recommendationsAdapter.getInitialState(),
);

const articleDetailsRecommendationsSlice = createSlice({
    name: 'articleDetailsPageRecommendationsSlice',
    initialState: recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleRecommendations.fulfilled, (state, action: PayloadAction<Article[]>) => {
                state.isLoading = false;
                recommendationsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articleDetailsRecommendationsReducer } = articleDetailsRecommendationsSlice;
