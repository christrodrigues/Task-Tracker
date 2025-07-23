# Modern Task Manager 📝

A beautiful, modern task management application built with React. Features a clean, intuitive interface with gradient designs, smooth animations, and responsive layout.

![Task Manager Preview](<img width="1050" height="986" alt="image" src="https://github.com/user-attachments/assets/774773c3-57ae-443e-a35d-7c06b4c9106f" />
)

## ✨ Features

- **Modern UI Design** - Clean, professional interface with gradient backgrounds
- **Responsive Layout** - Works perfectly on desktop, tablet, and mobile devices
- **Task Management** - Add, delete, and organize your tasks efficiently
- **Smart Reminders** - Set reminders with visual indicators and toggle functionality
- **Date & Time Picker** - Schedule tasks with precise timing
- **Interactive Elements** - Smooth hover effects and animations
- **Empty State** - Encouraging messages when no tasks are present
- **Task Statistics** - View total tasks and reminder counts

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/modern-task-manager.git
   cd modern-task-manager
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Install required packages**
   ```bash
   npm install lucide-react
   # or
   yarn add lucide-react
   ```

4. **Start the development server**
   ```bash
   npm start / npm run dev
   # or
   yarn start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`  or for vite `http://localhost:5173` to see the application

## 📁 Project Structure

```
src/
├── App.js                 # Main application component
├── App.css                # Global styles and component styling
└── components/
    ├── Header.js          # App header with title and add button
    ├── AddTask.js         # Task creation form component
    ├── Tasks.js           # Task list container with empty state
    └── Task.js            # Individual task item component
```

## 🎯 Usage

### Adding Tasks
1. Click the **"Add Task"** button in the header
2. Enter your task description
3. Optionally set a date and time
4. Toggle the reminder switch if needed
5. Click **"Add Task"** to save

### Managing Tasks
- **Delete Task**: Click the trash icon that appears on hover
- **Toggle Reminder**: Click the bell icon or double-click the task
- **View Details**: All task information is displayed on the card

### Keyboard Shortcuts
- **Enter**: Submit the add task form
- **Double-click**: Toggle task reminder on/off

## 🎨 Design Features

### Visual Elements
- **Gradient Backgrounds** - Beautiful blue to purple gradients
- **Card Design** - Clean, shadowed cards for each task
- **Modern Typography** - Using Inter font for clean readability
- **Color Coding** - Green borders for tasks with reminders
- **Smooth Animations** - Hover effects and transitions throughout

### Responsive Design
- **Mobile First** - Optimized for mobile devices
- **Flexible Layout** - Adapts to different screen sizes
- **Touch Friendly** - Large touch targets for mobile users

## 🛠️ Customization

### Styling
All styles are contained in `App.css`. You can easily customize:

- **Colors**: Modify gradient colors and accent colors
- **Spacing**: Adjust padding and margins
- **Typography**: Change fonts and text sizes
- **Animations**: Modify transition durations and effects

### Example Color Customization
```css
/* Change the main gradient */
.header-modern {
  background: linear-gradient(135deg, #your-color-1 0%, #your-color-2 100%);
}

/* Modify task reminder color */
.task-reminder {
  border-left: 4px solid #your-accent-color;
}
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



## 🐛 Known Issues

- Date picker format may vary between browsers
- Some animations may not work on older browsers



## 👏 Acknowledgments

- **Lucide React** - Beautiful icon library
- **Inter Font** - Clean, modern typography
- **React** - Powerful UI library
- **CSS Grid & Flexbox** - Modern layout techniques


**Made with ❤️ and React**

*Happy task managing! 🎉*
