import React from 'react';
import ContactItem from './components/ContactItem/ContactItem';

function App() {
  const contacts = [
    { id: 1, name: 'SomeOne', imgUrl: "https://i.pravatar.cc/150?img=12", lastMessage: 'Bay', online: true, tags: ['#friend', '#funny'], },
    { id: 2, name: 'AnyOne', imgUrl: "https://i.pravatar.cc/150?img=13", lastMessage: 'Hi', online: true, tags: ['#friend', '#funny'], },
    { id: 3, name: 'SomeBody', imgUrl: "https://i.pravatar.cc/150?img=9", lastMessage: 'Привет', online: false, tags: ['#friend', '#funny'], },
    { id: 4, name: 'SomeBody', imgUrl: "https://i.pravatar.cc/150?img=10", lastMessage: 'Как ты', online: false, tags: ['#friend', '#funny'], },
    { id: 5, name: 'SomeBody', imgUrl: "https://i.pravatar.cc/150?img=2", lastMessage: 'How are you?', online: true, tags: ['#friend', '#funny'], },
    { id: 6, name: 'SomeBody', imgUrl: "https://i.pravatar.cc/150?img=5", lastMessage: 'Чем занимаешся?', online: false, tags: ['#friend', '#funny'], },
    { id: 7, name: 'SomeBody', imgUrl: "https://i.pravatar.cc/150?img=1", lastMessage: 'Пока', online: true, tags: ['#friend', '#funny'], },

  ]
  return (
    <div >
      {contacts.map(o => <ContactItem name={o.name} imgUrl={o.imgUrl} lastMessage={o.lastMessage} tags={o.tags} online={o.online} />)}
    </div>
  );
}

export default App;
