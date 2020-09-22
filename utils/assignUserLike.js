export const assignUserLike = (photos, user) =>
  photos.map((photo) => {
    return {
      ...photo,
      liked: !!photo.usersLiked.find((userLiked) => userLiked.id === user.id)
    };
  });
