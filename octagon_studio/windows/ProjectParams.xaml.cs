using System;
using System.Windows;
using System.Windows.Controls;

namespace octagon_studio.windows
{
    /// <summary>
    /// Логика взаимодействия для ProjectParams.xaml
    /// </summary>
    public partial class ProjectParams : Window
    {
        dynamic LANG_PROJECT_PARAMS;
        ListBoxItem firstPos;
        UIElementCollection paramsPages;

        public ProjectParams()
        {
            InitializeComponent();

            // Choosing language pack of window
            LANG_PROJECT_PARAMS = App.language.PROJECT_PARAMS;
            DataContext = LANG_PROJECT_PARAMS;

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
            
        }

        private void SaveAll()
        {
            
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
