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
    /// Логика взаимодействия для ProgParams.xaml
    /// </summary>
    public partial class ProgParams : Window
    {
        dynamic LANG_PROG_PARAMS;

        public ProgParams()
        {
            InitializeComponent();

            LANG_PROG_PARAMS = App.language.PROG_PARAMS;
            this.DataContext = LANG_PROG_PARAMS;
        }
    }
}
