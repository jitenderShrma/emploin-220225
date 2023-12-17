module.exports = ({myPage, myLimit, total }) => {
    const page = parseInt(myPage, 10) || 1;
    const limit = parseInt(myLimit, 10) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
        const pagination = {};
        if (endIndex < total) {
            pagination.next = {
                page: page + 1,
                limit
            };
        }
        if (startIndex > 0) {
            pagination.prev = {
                page: page - 1,
                limit
            };
        }
        return {pagination, startIndex, limit};
}