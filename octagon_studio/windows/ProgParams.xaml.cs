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
using System.IO;
using Newtonsoft.Json;
using System.Collections;
using System.Xml.Linq;
using Octagon.Workers;

namespace octagon_studio.windows
{
    /// <summary>
    /// Логика взаимодействия для ProgParams.xaml
    /// </summary>
    public partial class ProgParams : Window
    {
        dynamic LANG_PROG_PARAMS;
        ListBoxItem firstPos;
        UIElementCollection paramsPages;

        public ProgParams()
        {
            InitializeComponent();

            // Choosing language pack of window
            LANG_PROG_PARAMS = App.language.PROG_PARAMS;
            DataContext = LANG_PROG_PARAMS;

            firstPos = (ListBoxItem)ParamsNav.Items[0];
            // Making selection on first tab in navigation panel
            firstPos.IsSelected = true;
        }

        // Page select event
        private void TabSelected(object sender, SelectionChangedEventArgs e)
        {
            ListBox nav = (ListBox)sender;
            ListBoxItem currentTab = (ListBoxItem)nav.SelectedItem;

            paramsPages = ParamsCont.Children;

            for (int i = 0; i < paramsPages.Count; i++)
            {
                paramsPages[i].Visibility = Visibility.Collapsed;
            }

            paramsPages[Convert.ToInt32(currentTab.Tag)].Visibility = Visibility.Visible;
        }

        private void LoadPageMain(object sender, DependencyPropertyChangedEventArgs e)
        {
            // Getting all language packs
            string[] packs = Directory.GetFiles(App.appData + @"\langs\", "??.json");
            ParamsLanguage.Items.Clear();

            foreach (string pack in packs)
            {
                // Loading language pack
                dynamic current = JsonConvert.DeserializeObject(File.ReadAllText(pack));
                dynamic info = current.INFO;
                // Creating item for combo box
                TextBlock text = new TextBlock();
                text.Text = info.NAME;

                ComboBoxItem newItem = new ComboBoxItem
                {
                    Content = text,
                    Tag = info.ABBR + ";" + info.IS_COMPLETED
                };

                if (current.ABBR == App.octagon.Lang.Abbr)
                {
                    newItem.IsSelected = true;
                }

                ParamsLanguage.Items.Add(newItem);
            }
        }

        private void SaveAll()
        {
            XElement octagonCfg = new XElement("Octagon");

            octagonCfg.Add(new XElement("Version", App.octagon.Version));

            ComboBoxItem currentLangItem = (ComboBoxItem)ParamsLanguage.SelectedItem;
            string langAbbr = currentLangItem.Tag.ToString().Split(';')[0];

            if (langAbbr == null)
            {
                langAbbr = App.octagon.Lang.Abbr;
            }

            octagonCfg.Add(new XElement("Language", langAbbr));
            OMSXml.WriteXml(App.appData + @"\Octagon.xml", octagonCfg);
        }

        // Showing message about uncomplete language pack if neccessary
        private void LangChanged(object sender, SelectionChangedEventArgs e)
        {
            ComboBox combo = (ComboBox)sender;
            ComboBoxItem item = (ComboBoxItem)combo.SelectedItem;
            
            if (item != null)
            {
                bool status = Convert.ToBoolean(item.Tag.ToString().Split(';')[1]);

                if (!status)
                {
                    ParamsUncompleteLang.Visibility = Visibility.Visible;
                }
                else
                {
                    ParamsUncompleteLang.Visibility = Visibility.Hidden;
                }
            }
        }

        private void ParamsApply(object sender, RoutedEventArgs e)
        {
            SaveAll();
        }

        private void ParamsOk(object sender, RoutedEventArgs e)
        {
            SaveAll();
            Close();
        }

        private void ParamsCancel(object sender, RoutedEventArgs e)
        {
            Close();
        }
    }
}
