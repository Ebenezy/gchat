const mutations = {
    SET_CONTACTS(state, payload) {
        state.CONTACTS = payload;
    },
    SET_SELECTED_CONTACTS(state, payload) {
        state.SELECTED_CONTACTS = payload;
    },
    SET_GROUPS(state, payload) {
        state.GROUPS = payload;
    },
    SET_GROUP_MESSAGE(state, payload) {
        state.GROUP_MESSAGE = payload;
    },
    SET_GROUP_DETAILS(state, payload) {
        state.GROUP_DETAILS = payload;
    },
    SET_PRIVATE_MESSAGE(state, payload) {
        state.PRIVATE_MESSAGE = payload;
    },
    SET_PRIVATE_DETAILS(state, payload) {
        state.PRIVATE_DETAILS = payload;
    },
};

export { mutations };
