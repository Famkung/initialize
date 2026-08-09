#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { execSync } = require('child_process');

const SKILLS_DIR = path.join(__dirname, '..', 'skills');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askQuestion = (query) => new Promise((resolve) => rl.question(query, resolve));

function getSkills() {
  if (!fs.existsSync(SKILLS_DIR)) return [];
  return fs.readdirSync(SKILLS_DIR).filter(file => {
    const skillPath = path.join(SKILLS_DIR, file);
    return fs.statSync(skillPath).isDirectory() && 
           fs.existsSync(path.join(skillPath, 'SKILL.md'));
  });
}

function getSkillInfo(skillName) {
  const skillPath = path.join(SKILLS_DIR, skillName, 'SKILL.md');
  if (!fs.existsSync(skillPath)) return null;
  
  const content = fs.readFileSync(skillPath, 'utf8');
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  
  if (!frontmatterMatch) return { name: skillName, description: 'No description available' };
  
  const frontmatter = frontmatterMatch[1];
  const nameMatch = frontmatter.match(/name:\s*(.+)/);
  const descMatch = frontmatter.match(/description:\s*(.+)/);
  
  return {
    name: nameMatch ? nameMatch[1].trim() : skillName,
    description: descMatch ? descMatch[1].trim() : 'No description available',
    path: skillPath
  };
}

function listSkills() {
  const skills = getSkills();
  
  if (skills.length === 0) {
    console.log('\n📭 No skills found in this repository.\n');
    return;
  }
  
  console.log('\n📦 Available Skills:\n');
  console.log('─'.repeat(50));
  
  skills.forEach((skill, index) => {
    const info = getSkillInfo(skill);
    console.log(`${index + 1}. ${info.name}`);
    console.log(`   ${info.description.substring(0, 60)}${info.description.length > 60 ? '...' : ''}`);
    console.log('');
  });
  
  console.log('─'.repeat(50));
  console.log(`Total: ${skills.length} skill(s)\n`);
}

function showSkillInfo(skillName) {
  const info = getSkillInfo(skillName);
  
  if (!info) {
    console.log(`\n❌ Skill "${skillName}" not found.\n`);
    return;
  }
  
  console.log('\n' + '═'.repeat(50));
  console.log(`📋 Skill: ${info.name}`);
  console.log('═'.repeat(50));
  console.log(`\n📝 Description:\n${info.description}`);
  console.log(`\n📁 Location: ${info.path}`);
  console.log('═'.repeat(50) + '\n');
}

async function installSkill(skillName, targetDir) {
  const skillPath = path.join(SKILLS_DIR, skillName);
  
  if (!fs.existsSync(skillPath)) {
    console.log(`\n❌ Skill "${skillName}" not found.\n`);
    return;
  }
  
  const targetSkillsDir = path.join(targetDir, '.agents', 'skills');
  fs.mkdirSync(targetSkillsDir, { recursive: true });
  
  copyFolderSync(skillPath, path.join(targetSkillsDir, skillName));
  
  console.log(`\n✅ Skill "${skillName}" installed to: ${targetSkillsDir}/${skillName}\n`);
}

function copyFolderSync(from, to) {
  if (!fs.existsSync(to)) {
    fs.mkdirSync(to, { recursive: true });
  }
  fs.readdirSync(from).forEach(element => {
    const fromPath = path.join(from, element);
    const toPath = path.join(to, element);
    if (fs.lstatSync(fromPath).isDirectory()) {
      copyFolderSync(fromPath, toPath);
    } else {
      fs.copyFileSync(fromPath, toPath);
    }
  });
}

function showHelp() {
  console.log(`
╔═══════════════════════════════════════════════════════════╗
║           🚀 Skills Manager - FamDev Initialize          ║
╚═══════════════════════════════════════════════════════════╝

Usage:
  npx skills-manager <command> [options]

Commands:
  list                    List all available skills
  info <skill-name>       Show detailed info about a skill
  install <skill-name>    Install a skill to current directory
  help                    Show this help message

Examples:
  npx skills-manager list
  npx skills-manager info fullstack-initializer
  npx skills-manager install fullstack-initializer

`);
}

async function main() {
  const args = process.argv.slice(2);
  const command = args[0];
  
  if (!command || command === 'help' || command === '--help' || command === '-h') {
    showHelp();
    rl.close();
    return;
  }
  
  switch (command) {
    case 'list':
      listSkills();
      break;
      
    case 'info':
      if (!args[1]) {
        console.log('\n❌ Please specify a skill name. Example: npx skills-manager info fullstack-initializer\n');
      } else {
        showSkillInfo(args[1]);
      }
      break;
      
    case 'install':
      if (!args[1]) {
        console.log('\n❌ Please specify a skill name. Example: npx skills-manager install fullstack-initializer\n');
      } else {
        const targetDir = args[2] || process.cwd();
        await installSkill(args[1], targetDir);
      }
      break;
      
    default:
      console.log(`\n❌ Unknown command: ${command}\n`);
      showHelp();
  }
  
  rl.close();
}

main();
