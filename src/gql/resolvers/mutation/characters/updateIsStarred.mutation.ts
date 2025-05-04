import DB from 'database';

const updateIsStarred = async ({
  id,
  is_starred,
}: {
  id: number;
  is_starred: boolean;
}) => {
  const character = await DB.character.findByPk(id);
  if (!character) throw new Error('Character not found');

  character.is_starred = is_starred;
  await character.save();

  return character;
};

export default updateIsStarred;
