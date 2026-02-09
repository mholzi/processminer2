const fs = require('fs-extra');
const path = require('node:path');
const chalk = require('chalk');

/**
 * ProcessMiner Module Installer
 *
 * Tasks:
 * 1. Create process_output_folder directory
 * 2. Copy _progress.yaml template to data/
 * 3. Copy document-schema.yaml to data/
 */
async function install(options) {
  const { projectRoot, config, logger } = options;

  try {
    logger.log(chalk.blue('Installing ProcessMiner...'));

    // 1. Create process output folder
    if (config['process_output_folder']) {
      const dirConfig = config['process_output_folder'].replace('{project-root}/', '');
      const dirPath = path.join(projectRoot, dirConfig);

      if (!(await fs.pathExists(dirPath))) {
        logger.log(chalk.yellow(`  Creating directory: ${dirConfig}`));
        await fs.ensureDir(dirPath);
      } else {
        logger.log(chalk.dim(`  Directory exists: ${dirConfig}`));
      }
    }

    // 2. Copy _progress.yaml template
    const progressTemplateSource = path.join(__dirname, 'templates', '_progress.template.yaml');
    const progressTemplateDest = path.join(projectRoot, '_bmad', 'modules', 'process-miner', 'data', '_progress.template.yaml');

    if (await fs.pathExists(progressTemplateSource)) {
      await fs.ensureDir(path.dirname(progressTemplateDest));
      await fs.copy(progressTemplateSource, progressTemplateDest);
      logger.log(chalk.green('  ✓ Copied _progress.yaml template'));
    }

    // 3. Copy document-schema.yaml
    const schemaSource = path.join(__dirname, 'templates', 'document-schema.yaml');
    const schemaDest = path.join(projectRoot, '_bmad', 'modules', 'process-miner', 'data', 'document-schema.yaml');

    if (await fs.pathExists(schemaSource)) {
      await fs.ensureDir(path.dirname(schemaDest));
      await fs.copy(schemaSource, schemaDest);
      logger.log(chalk.green('  ✓ Copied document-schema.yaml'));
    }

    logger.log(chalk.green('✓ ProcessMiner installation complete'));
    return true;
  } catch (error) {
    logger.error(chalk.red(`Error installing ProcessMiner: ${error.message}`));
    return false;
  }
}

module.exports = { install };
