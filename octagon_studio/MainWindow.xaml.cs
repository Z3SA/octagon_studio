using System;
using System.Windows;
using System.Windows.Input;
using Octagon.Workers;
using Octagon.Program;
using Octagon.Project;

namespace octagon_studio
{
    /// <summary>
    /// Логика взаимодействия для MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        // Choosing language pack of window
        dynamic LANG_MAIN_WINDOW = App.language.MAIN_WINDOW;

        // Window init
        public MainWindow()
        {
            InitializeComponent();

            DataContext = LANG_MAIN_WINDOW;
            // Writing version of program in status bar
            StatusBarVersion.Text = "Octagon Modmaking Studio " + App.octagon.Version;

            OMSSession currentSession = App.octagon.Session;

            Width = currentSession.WinWidth;
            Height = currentSession.WinHeight;
            Left = currentSession.WinPosLeft;
            Top = currentSession.WinPosTop;
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
            CPWin.Owner = this;
            CPWin.Show();
        }

        //Opening window "Program parameters"
        private void MainWindow_progParams(object sender, RoutedEventArgs e)
        {
            windows.ProgParams PPWin = new windows.ProgParams();
            PPWin.Owner = this;
            PPWin.Show();
        }

        // Opening window "Open project"
        private void MainWindow_openProject(object sender, RoutedEventArgs e)
        {
            try
            {
                string folder = OMSFile.FindFolder();

                App.ChangeProject(new OMSProject(folder));
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }

        // Opening window "Project parameters"
        private void MainWindow_projectParams(object sender, RoutedEventArgs e)
        {
            windows.ProjectParams PPWin = new windows.ProjectParams();
            PPWin.Owner = this;
            PPWin.Show();
        }

        // Opening window "Notes"
        private void MainWindow_notes(object sender, RoutedEventArgs e)
        {
            windows.ProgramNotes PNWin = new windows.ProgramNotes();
            PNWin.Owner = this;
            PNWin.Show();
        }

        private void SaveCurrentSession(object sender, System.ComponentModel.CancelEventArgs e)
        {
            OMSSession.SaveSession((int)Width, (int)Height, (int)Left, (int)Top);
        }
    }

    // Main window commands
    public class MainWindowCommands
    {
        public static RoutedCommand OpenCreateProjectWindow { get; set; }
        public static RoutedCommand OpenProgramParamsWindow { get; set; }
        public static RoutedCommand OpenOpenProjectWindow { get; set; }
        public static RoutedCommand OpenProjectParamsWindow { get; set; }
        public static RoutedCommand OpenNotesWindow { get; set; }

        static MainWindowCommands()
        {
            OpenCreateProjectWindow = new RoutedCommand("OpenCreateProjectWindow", typeof(MainWindow));
            OpenProgramParamsWindow = new RoutedCommand("OpenProgramParamsWindow", typeof(MainWindow));
            OpenOpenProjectWindow = new RoutedCommand("OpenOpenProjectWindow", typeof(MainWindow));
            OpenProjectParamsWindow = new RoutedCommand("OpenProjectParamsWindow", typeof(MainWindow));
            OpenNotesWindow = new RoutedCommand("OpenNotesWindow", typeof(MainWindow));
        }
    }
}
