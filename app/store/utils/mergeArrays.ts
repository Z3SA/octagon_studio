import { IMergeArraysParams } from './model';

/**
 * Immutable merge of two arrays with update opportunity
 * @param params - Params of merging\
 * NOT COMPLETED
 */
export const mergeArrays = (
  params: IMergeArraysParams = {
    sourceArray: [],
    targetArray: [],
    update: false,
    key: null,
  }
) => {
  if (params.update) {
    for (let i = 0; i < params.sourceArray.length; i++) {}
  } else {
    const targetArrayWithoutDuplicates =
      params.key && typeof params.targetArray[0] === 'object'
        ? params.targetArray.filter(
            i =>
              params.sourceArray.map(item => item[params.key]).indexOf(i[params.key]) ===
              -1
          )
        : params.targetArray.filter(i => params.sourceArray.indexOf(i) === -1);

    return [...params.sourceArray, ...targetArrayWithoutDuplicates];
  }
};
