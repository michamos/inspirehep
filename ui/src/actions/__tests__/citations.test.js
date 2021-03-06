import MockAdapter from 'axios-mock-adapter';
import { fromJS } from 'immutable';

import { getStore, getStoreWithState } from '../../fixtures/store';
import http from '../../common/http';
import * as types from '../actionTypes';
import {
  fetchCitations,
  fetchCitationSummary,
  fetchCitationsByYear,
} from '../citations';

const mockHttp = new MockAdapter(http);

describe('citations - async action creator', () => {
  afterEach(() => {
    mockHttp.reset();
  });

  it('creates CITATIONS_SUCCESS if successful', async done => {
    mockHttp
      .onGet('/literature/123/citations?page=1&size=10')
      .replyOnce(200, { foo: 'bar' });

    const expectedActions = [
      { type: types.CITATIONS_REQUEST },
      { type: types.CITATIONS_SUCCESS, payload: { foo: 'bar' } },
    ];

    const store = getStore();
    await store.dispatch(
      fetchCitations('literature', 123, { page: 1, pageSize: 10 })
    );
    expect(store.getActions()).toEqual(expectedActions);
    done();
  });

  it('creates CITATIONS_ERROR if unsuccessful', async done => {
    mockHttp.onGet('/authors/123/citations?page=2&size=10').replyOnce(500);

    const expectedActions = [
      { type: types.CITATIONS_REQUEST },
      { type: types.CITATIONS_ERROR, payload: { status: 500 } },
    ];

    const store = getStore();
    await store.dispatch(
      fetchCitations('authors', 123, { page: 2, pageSize: 10 })
    );
    expect(store.getActions()).toEqual(expectedActions);
    done();
  });

  it('creates CITATIONS_SUMMARY_SUCCESS if successful [authors]', async done => {
    mockHttp
      .onGet(
        '/literature/facets?author=J.M.Maxson.1_Jared&facet_name=citation-summary'
      )
      .replyOnce(200, { foo: 'bar' });

    const expectedActions = [
      { type: types.CITATIONS_SUMMARY_REQUEST },
      { type: types.CITATIONS_SUMMARY_SUCCESS, payload: { foo: 'bar' } },
    ];

    const store = getStoreWithState({
      router: {
        location: { pathname: '/authors/12345' },
      },
      authors: fromJS({
        publications: {
          query: {
            author: ['J.M.Maxson.1_Jared'],
          },
        },
      }),
    });
    await store.dispatch(fetchCitationSummary());
    expect(store.getActions()).toEqual(expectedActions);
    done();
  });

  it('creates CITATIONS_SUMMARY_ERROR if unsuccessful [literature]', async done => {
    mockHttp
      .onGet('/literature/facets?q=stuff&facet_name=citation-summary')
      .replyOnce(404, { message: 'Error' });

    const expectedActions = [
      { type: types.CITATIONS_SUMMARY_REQUEST },
      {
        type: types.CITATIONS_SUMMARY_ERROR,
        payload: { status: 404, message: 'Error' },
      },
    ];

    const store = getStoreWithState({
      router: {
        location: {
          pathname: '/literature?q=stuff',
          query: { q: 'stuff' },
        },
      },
    });
    await store.dispatch(fetchCitationSummary());
    expect(store.getActions()).toEqual(expectedActions);
    done();
  });

  it('creates CITATIONS_BY_YEAR_SUCCESS if successful [authors]', async done => {
    mockHttp
      .onGet(
        '/literature/facets?author=J.M.Maxson.1_Jared&facet_name=citations-by-year'
      )
      .replyOnce(200, { foo: 'bar' });

    const expectedActions = [
      { type: types.CITATIONS_BY_YEAR_REQUEST },
      { type: types.CITATIONS_BY_YEAR_SUCCESS, payload: { foo: 'bar' } },
    ];

    const store = getStoreWithState({
      router: {
        location: { pathname: '/authors/12345' },
      },
      authors: fromJS({
        publications: {
          query: {
            author: ['J.M.Maxson.1_Jared'],
          },
        },
      }),
    });
    await store.dispatch(fetchCitationsByYear());
    expect(store.getActions()).toEqual(expectedActions);
    done();
  });

  it('creates CITATIONS_BY_YEAR_ERROR if unsuccessful [literature]', async done => {
    mockHttp
      .onGet('/literature/facets?q=stuff&facet_name=citations-by-year')
      .replyOnce(404, { message: 'Error' });

    const expectedActions = [
      { type: types.CITATIONS_BY_YEAR_REQUEST },
      {
        type: types.CITATIONS_BY_YEAR_ERROR,
        payload: { status: 404, message: 'Error' },
      },
    ];

    const store = getStoreWithState({
      router: {
        location: {
          pathname: '/literature?q=stuff',
          query: { q: 'stuff' },
        },
      },
    });
    await store.dispatch(fetchCitationsByYear());
    expect(store.getActions()).toEqual(expectedActions);
    done();
  });
});
