using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Input;

namespace octagon_studio
{
    /// <summary>
    /// Логика взаимодействия для MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        // Window init
        public MainWindow()
        {
            InitializeComponent();

            // Choosing language pack of window
            dynamic LANG_MAIN_WINDOW = App.language.MAIN_WINDOW;
            DataContext = LANG_MAIN_WINDOW;
            // Writing version of program in status bar
            StatusBarVersion.Text = "Octagon Modmaking Studio " + App.octagon.Version;
        }
        
        // Click event of button "Close"
        private void MainWindow_Close(object sender, RoutedEventArgs e)
        {
            Close();
        }
        
        // Click event of button "Maximize"
        private void MainWindow_Maximize(object sender, RoutedEventArgs e)
        {
            var window = this;
            if (window.WindowState == WindowState.Normal)
            {
                window.WindowState = WindowState.Maximized;
                window.Top = 0;
                window.Left = 0;
                window.MaxHeight = SystemParameters.WorkArea.Height;
            }
            else
            {
                window.WindowState = WindowState.Normal;
            }
        }
        
        // Click event of button "Minimize"
        private void MainWindow_Minimize(object sender, RoutedEventArgs e)
        {
            var window = this;
            window.WindowState = WindowState.Minimized;
        }

        // Checking window's size for excluding exceeding the work area
        private void MainWindow_SizeChanged(object sender, SizeChangedEventArgs e)
        {
            if (WindowState == WindowState.Maximized)
            {
                WindowState = WindowState.Normal;
                Left = 0;
                Top = 0;
                Height = SystemParameters.WorkArea.Height;
                Width = SystemParameters.WorkArea.Width;
            }
        }

        // Opening window "Create project"
        private void MainWindow_createProject(object sender, RoutedEventArgs e)
        {
            windows.CreateProject CPWin = new windows.CreateProject();
            CPWin.Show();
        }

        //Opening window "Program parameters"
        private void MainWindow_progParams(object sender, RoutedEventArgs e)
        {
            windows.ProgParams PPWin = new windows.ProgParams();
            PPWin.Show();
        }
    }

    // Main window commands
    public class MainWindowCommands
    {
        public static RoutedCommand OpenCreateProjectWindow { get; set; }
        public static RoutedCommand OpenProgramParamsWindow { get; set; }

        static MainWindowCommands()
        {
            OpenCreateProjectWindow = new RoutedCommand("OpenCreateProjectWindow", typeof(MainWindow));
            OpenProgramParamsWindow = new RoutedCommand("OpenProgramParamsWindow", typeof(MainWindow));
        }
    }
}
