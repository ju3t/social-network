import avatar from '../../img/main photo.png';
import { IUser } from '../../types/user';

function getUserById(id: number) :IUser {
  return {
    userId: 1,
    firstName: 'Руслан',
    lastName: 'Вадимов',
    password: 'qwerty',
    email: 'email@email.com',
    dateOfBirth: '01.01.2000',
    education: 'Высшее техническое',
    aboutMe: 'About me',
    linkSite: 'www.site.com',
    avatar,
    city: 'Moscow',
    status: '- На моем компе все работает.\n— Отправим клиенту твой комп.',
    activeName: 'online',
  };
}

export default getUserById;
