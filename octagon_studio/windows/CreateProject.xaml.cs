using System;
using System.Windows;
using System.Windows.Input;
using System.Text.RegularExpressions;
using System.Collections.Generic;
using Octagon;
using Octagon.Workers;
using System.IO;

namespace octagon_studio.windows
{
    /// <summary>
    /// Логика взаимодействия для CreateProject.xaml
    /// </summary>
    public partial class CreateProject : Window
    {
        dynamic LANG_CREATE_PROJECT = App.language.CREATE_PROJECT;

        public CreateProject()
        {
            InitializeComponent();
            DataContext = LANG_CREATE_PROJECT;

            projectID.PreviewTextInput += new TextCompositionEventHandler(CheckID);
        }

        private void FindFolder(object sender, RoutedEventArgs e)
        {
            projectFolder.Text = OMSFile.FindFolder();
        }

        private void CheckID(object sender, TextCompositionEventArgs e)
        {
            Regex inputRegex = new Regex(@"^([a-zA-Z]|[0-9]|-|_)+$");
            Match matchInput = inputRegex.Match(e.Text);

            if (!matchInput.Success) e.Handled = true;
        }

        private void NewProject(object sender, RoutedEventArgs e)
        {
            try
            {
                string folder = projectFolder.Text;

                if (String.IsNullOrWhiteSpace(projectName.Text))
                {
                    throw new Exception(LANG_CREATE_PROJECT.PROCESS.ERROR__WRONG_NAME);
                }

                if (String.IsNullOrWhiteSpace(projectID.Text))
                {
                    throw new Exception(LANG_CREATE_PROJECT.PROCESS.ERROR__WRONG_ID);
                }

                if (String.IsNullOrWhiteSpace(folder))
                {
                    throw new Exception(LANG_CREATE_PROJECT.PROCESS.ERROR__WRONG_DIR);
                }

                if (Directory.Exists(folder + "\\.octagon"))
                {
                    throw new Exception(LANG_CREATE_PROJECT.PROCESS.ERROR__ALREADY_EXISTS);
                }
                else
                {
                    List<string> allAuthors = new List<string>();
                    string authors = projectAuthors.Text;
                    if (authors != String.Empty)
                    {
                        string[] currentAuthors = authors.Split(',');

                        for (int i = 0; i < currentAuthors.Length; i++) allAuthors.Add(currentAuthors[i]);
                    }

                    OMSPlatform currentPlatform = new OMSPlatform(projectPlatform.Text, projectVersion.Text, folder);

                    OMSProject project = new OMSProject(projectName.Text, projectID.Text, currentPlatform, allAuthors);
                    project.CreateNew(folder);
                    Close();
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }
    }
}
