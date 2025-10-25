# Contributing to Workout Progress Tracker

Thank you for your interest in contributing to the Workout Progress Tracker! This document provides guidelines for contributing to the project.

## 🤝 How to Contribute

### Reporting Bugs

If you find a bug, please create an issue with:
- Clear description of the bug
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Browser and version information

### Suggesting Enhancements

We welcome feature requests! Please create an issue with:
- Clear description of the feature
- Use case and benefits
- Possible implementation approach (optional)

### Pull Requests

1. **Fork the Repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/WorkoutTracker.git
   cd WorkoutTracker
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Your Changes**
   - Write clean, readable code
   - Follow existing code style
   - Test your changes thoroughly
   - Update documentation if needed

4. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "Add: Brief description of your changes"
   ```
   
   Use conventional commit messages:
   - `Add:` for new features
   - `Fix:` for bug fixes
   - `Update:` for updates to existing features
   - `Refactor:` for code refactoring
   - `Docs:` for documentation changes

5. **Push to Your Fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your branch
   - Provide a clear description of changes
   - Link related issues

## 📝 Code Style Guidelines

### JavaScript
- Use ES6+ features
- Use descriptive variable and function names
- Add comments for complex logic
- Keep functions small and focused
- Handle errors gracefully

### HTML/CSS
- Use semantic HTML5 elements
- Follow Tailwind CSS conventions
- Ensure accessibility (ARIA labels, keyboard navigation)
- Test responsive design on multiple screen sizes

### Security
- Never commit API keys or sensitive data
- Sanitize user inputs
- Follow Firebase security best practices
- Validate data on both client and server side

## 🧪 Testing

Before submitting a PR:
- Test all functionality manually
- Verify on multiple browsers (Chrome, Firefox, Safari)
- Test on mobile devices
- Check console for errors
- Verify Firebase integration works correctly

## 📋 What We're Looking For

### High Priority
- Bug fixes
- Security improvements
- Accessibility enhancements
- Performance optimizations
- Documentation improvements

### Feature Ideas
- Data export/import functionality
- Workout statistics and analytics
- Exercise library
- Progress charts
- Goal setting features
- Streak tracking
- Dark/light theme toggle
- Multi-language support

## 🚫 What to Avoid

- Breaking changes without discussion
- Adding unnecessary dependencies
- Committing generated files or build artifacts
- Large refactoring without prior discussion
- Changes that significantly increase bundle size

## 📞 Getting Help

- Create an issue for questions
- Check existing issues and PRs
- Review the README.md for setup instructions

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 🎉 Recognition

Contributors will be acknowledged in the project. Thank you for making this project better!

---

**Note**: This is a simple single-file web application. Keep contributions focused and maintainable. For major architectural changes, please open an issue for discussion first.
