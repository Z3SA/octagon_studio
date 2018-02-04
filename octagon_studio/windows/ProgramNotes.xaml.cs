using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;

namespace octagon_studio.windows
{
    /// <summary>
    /// Логика взаимодействия для ProgramNotes.xaml
    /// </summary>
    public partial class ProgramNotes : Window
    {
        // Language pack of window
        dynamic LANG_NOTES = App.language.NOTES;

        public ProgramNotes()
        {
            InitializeComponent();
            DataContext = LANG_NOTES;
        }
    }
}
