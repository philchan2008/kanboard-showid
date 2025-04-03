# Kanboard ShowID Plugin

## 📌 Overview
The **Kanboard ShowID Plugin** enhances Kanboard by displaying the underlying **comment IDs, sub-task IDs, and major KB numbers** on every screen. This feature is particularly useful for developers, allowing them to easily **locate comments, sub-tasks, and tasks** using screen captures that now contain these critical IDs.

## 🚀 Features
- Displays **comment IDs**, **sub-task IDs**, and **KB numbers** on all screens.
- Helps developers **identify and locate** items efficiently using screen captures.
- Improves **workflow visibility** by ensuring IDs are always accessible.

## 🔧 Installation
1. Download the plugin from the repository.
2. Extract the plugin into the `plugins` directory of your Kanboard installation:
```cd /var/www/kanboard/plugins git clone https://github.com/philchan2008/kanboard-showid.git ShowID```
3. Ensure the correct file permissions: 
```chown -R www-data:www-data ShowID```
4. Restart Kanboard.

## 📜 Usage
- Once installed, IDs will be **visible on all screens**.
- Take screenshots with IDs displayed to easily **reference comments, sub-tasks, or KB numbers**.
- No configuration required—works **automatically**.

## 🛠 Requirements
- **Kanboard** (latest stable version)
- PHP **7.x or later**
- Apache/Nginx web server

## 📄 License
This project is licensed under the **MIT License**.

## 👥 Author
Created by **[Phil Chan](https://github.com/philchan2008)**. Contributions and feedback are welcome!

