using System;
using System.Windows;
using Octagon;

namespace octagon_studio
{

    /// <summary>
    /// Логика взаимодействия для App.xaml
    /// </summary>
    public partial class App : Application
    {
        // Appliction Data folder of program
        public static string appData = Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData) + "/Octagon Studio/";
        // Loading config of program (Octagon.xml in AppData/Roaming/Octagon Studio)
        public static OMS octagon = new OMS();
        // Link on current session
        public static OMSSession session = octagon.Session;
        // Saving language pack of current language by user or by default
        public static dynamic language = octagon.Lang.Data;

        public static void ChangeProject(OMSProject newProject)
        {
            session.Project = newProject;
        }
    }
}
