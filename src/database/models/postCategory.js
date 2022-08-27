module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize
    .define(
      'PostCategory', 
      {
        postId: {
          type: DataTypes.INTEGER,
          foreignKey: true,
        },
        categoryId: {
          type:DataTypes.INTEGER,
          foreignKey: true,
        },
      }, 
      { tableName: 'PostCategories' },
    );

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'postcategories',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return PostCategory;
}