export function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT': {
            return state + 100;
        }
        case 'DECREMENT': {
            return state - 100;
        }
        default: {
            return state
        }
    }
}

export function fetchPosts() {
    return function (dispatch) {
        /**
         * 这里使用Promise+settimeout模拟网络请求
         */
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('结果-异步请求成功');
                reject('结果-异步请求失败');
            }, 3000);
        }).then((data) => {
            /**
             * 使用请求结果来更新应用对应的state，
             * 可以使用多个dispatch
             */
            // dispatch(data);
            console.log(data);
            return {
                data:[]
            };
        }).catch((data) => {
            // dispatch(data);
            console.log(data)
        })
    }
}
