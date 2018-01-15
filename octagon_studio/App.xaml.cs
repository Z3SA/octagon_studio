using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using System.Windows;
using Newtonsoft.Json;
using System.IO;
using Octagon;

namespace octagon_studio
{

    /// <summary>
    /// Логика взаимодействия для App.xaml
    /// </summary>
    public partial class App : Application
    {
        public static string appData = Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData) + "/Octagon Studio/";
        public static OMS octagon = OMS.LoadConfig();
        public static dynamic language = octagon.Lang.Data;
    }
}
