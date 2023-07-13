import React from 'react'
import { useContext ,useEffect} from 'react'
import noteContext from '../context/notes/noteContext'


const About = () => {
  
  return (
    <div className='container my-4' style={{"height":"650px"}}>
      <h2 className='text-center text-light my-4'>About Inotes</h2>
      <p className='text-light'>
        
      iNotes is an innovative and user-friendly application that allows you to create, manage, and organize your digital notes effortlessly. With iNotes, you can streamline your note-taking process, whether you're jotting down quick ideas, making to-do lists, or writing detailed memos.

Signing up for iNotes provides you with a personalized experience, as it allows you to access your notes from multiple devices and ensures your data remains securely stored. The app offers a sleek and intuitive interface, making it easy for users of all levels to navigate and utilize its features.

Once signed in, you can start creating notes by simply typing or using the built-in keyboard. The app provides a variety of formatting options, allowing you to customize your notes with different fonts, styles, colors, and bullet points. You can also insert images, links, and attachments to enrich your notes with additional context or visual elements.

iNotes makes it effortless to organize your notes into different categories or folders, helping you stay organized and find your information quickly. You can create tags and labels to further classify your notes and facilitate efficient searching later on. The app also features a powerful search function, enabling you to locate specific notes based on keywords or tags.

Furthermore, iNotes offers a seamless editing experience. You can easily update your notes by making changes, adding new content, or deleting unnecessary information. The app automatically saves your changes, ensuring that no edits are lost. It also keeps track of the revision history, allowing you to revert to previous versions if needed.

The app prioritizes user privacy and security. Your notes are encrypted and stored securely, preventing unauthorized access and ensuring your sensitive information remains protected. iNotes also offers optional passcode or biometric authentication to further enhance the security of your notes.

With iNotes, you can sync your notes across different devices in real-time. Whether you're using your smartphone, tablet, or computer, your notes will be accessible and up-to-date, enabling you to work seamlessly from anywhere.

In summary, iNotes is a versatile note-taking app that provides a range of features to help you write, delete, and update your notes effortlessly. Its user-friendly interface, powerful organization capabilities, and robust security measures make it an ideal tool for individuals and professionals who rely on efficient note-taking and information management.
      </p>
       </div>
  )
}


export default About