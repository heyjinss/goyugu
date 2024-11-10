import { setIn, updateIn } from "seamless-immutable";

function addToArray(arr, newValue) {
  return arr.concat([newValue]);
}

function popArray(arr) {
  return arr.slice(0, arr.length - 1);
}

function spliceArray(arr, idx) {
  let rtnArr = null;
  if (idx === 0) {
    rtnArr = arr.slice(idx + 1, arr.length);
  } else {
    rtnArr = arr.slice(0, idx);
    rtnArr = rtnArr.concat(arr.slice(idx + 1, arr.length));
  }
  return rtnArr;
}

function removeArrayElements(arr, idxs) {
  const filterd = arr.filter((element, idx) => {
    return !idxs.includes(idx);
  });

  return filterd;
}

function replaceArrayElements(arr, idx, newValue) {
  return arr.map((item, index) => {
    if (index !== idx) {
      return item;
    }

    return {
      ...item,
      ...newValue,
    };
  });
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case "REPLACE_STATE": {
      return action.value;
    }
    case "SET_STATE": {
      let target = [];

      let type = null;
      let data_node = action.target
        ? action.target.attributes.getNamedItem("data_node").value
        : action.data_node;
      let data_value = action.target ? action.target.value : action.value;

      try {
        type = action.target
          ? action.target.attributes.getNamedItem("type").value
          : action.type;
      } catch (e) {}

      if (type === "id") {
        data_value = data_value.replaceAll(" ", "");
      }

      for (let i = 0; i < data_node.split(".").length; i++) {
        target.push(data_node.split(".")[i]);
      }

      if (action.callback && typeof action.callback === "function")
        action.callback();

      return setIn(state, target, data_value);
    }

    case "ADD_TO_ARRAY": {
      let target = [];

      let data_node = action.target
        ? action.target.attributes.getNamedItem("data_node").value
        : action.data_node;
      let data_value = action.target ? action.target.value : action.value;
      for (let i = 0; i < data_node.split(".").length; i++) {
        target.push(data_node.split(".")[i]);
      }

      if (action.callback && typeof action.callback === "function")
        action.callback();
      return updateIn(state, target, addToArray, data_value);
    }

    case "POP_ARRAY": {
      let target = [];

      let data_node = action.target
        ? action.target.attributes.getNamedItem("data_node").value
        : action.data_node;
      let data_value = action.target ? action.target.value : action.value;
      for (let i = 0; i < data_node.split(".").length; i++) {
        target.push(data_node.split(".")[i]);
      }

      return updateIn(state, target, popArray, data_value);
    }

    case "SPLICE_ARRAY": {
      let target = [];

      let data_node = action.target
        ? action.target.attributes.getNamedItem("data_node").value
        : action.data_node;
      let data_value = action.target ? action.target.value : action.value;
      for (let i = 0; i < data_node.split(".").length; i++) {
        target.push(data_node.split(".")[i]);
      }

      return updateIn(state, target, spliceArray, data_value);
    }

    case "REMOVE_ARRAY_ELEMENTS": {
      let target = [];

      let data_node = action.target
        ? action.target.attributes.getNamedItem("data_node").value
        : action.data_node;
      let target_idx = action.target ? action.target.idx : action.idx;
      for (let i = 0; i < data_node.split(".").length; i++) {
        target.push(data_node.split(".")[i]);
      }

      return updateIn(state, target, removeArrayElements, target_idx);
    }

    case "UPDATE_ARRAY_ELEMENTS": {
      let target = [];

      let data_node = action.target
        ? action.target.attributes.getNamedItem("data_node").value
        : action.data_node;
      let target_idx = action.target ? action.target.idx : action.idx;
      let data_value = action.target ? action.target.value : action.value;
      for (let i = 0; i < data_node.split(".").length; i++) {
        target.push(data_node.split(".")[i]);
      }

      return updateIn(
        state,
        target,
        replaceArrayElements,
        target_idx,
        data_value
      );
    }

    default: {
      return state;
    }
  }
};
