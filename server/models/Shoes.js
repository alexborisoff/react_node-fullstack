module.exports = (sequalize, DataTypes) => {
    const Shoes = sequalize.define('Shoes', {
        photo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sizes: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        article: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Shoes;
};
